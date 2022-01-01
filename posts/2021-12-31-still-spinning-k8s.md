---
title: Daily Tech Challenge \#2
subtitle: Still Spinning K8s
date: 2021-12-31
author: Joe Taylor
---
# Daily Tech Challenge #2
## Still Spinning K8s

<div class="authorship">Authored by Joe Taylor 12/31/2021</div>

Leaving [yesterday's
challenge](/posts/2021-12-30-daily-challenge-spin-up-django.html) half finished
and then moving on doesn't sit well with me. There's plenty of shiny new tech to
explore, but instead of doing my best magpie impression and reaching for the
shiny objects in front of me, I'm going to pick up where I left off, and get
Django deployed in Kubernetes, damn it!

I spent some time late last night reading Django's docs, and now feel at least a
little bit better acquainted with its model of the world - I'm comfortable
bootstrapping a new Django installation and configuring some routes. I have
learned that serving static files will involve a chunk of extra work worthy of
it's own tech challenge, so I'm putting that to the side for now. I've also
learned that writing about solving a problem and actually solving it are
distinctly separate steps; there needs to be space between them, but it takes a
lot of discipline to go back and write about something you already understand
thoroughly.

Anyhow, I'm going to set aside an hour or so (in retrospect, hahahaha) to
actually focus on coding, exploring, and figuring things out, and only start
writing this blog entry when I'm ready to start over and document what I
learned. When I say start over, I truly mean that. I'm going to do this
challenge twice; once for me, and once for *us.*

*Time passes...*

On second thought? Scratch that. My time and energy levels are rapidly
dwindling, and I've only just barely begun to touch the K8s manifests. It's time
to talk about [what I've got so far](https://github.com/textninja/dtc0002/), and
then move the hell on.

## The docker image

Picking up where we left off yesterday, I pushed our Docker image to Docker Hub,
and made a few tweaks so that secrets are parameterized in environment
variables.

For example, I updated the `docker-compose.yml` to pass along environment
variables from `.env`, and made made corresponding changes to settings.py, as
shown.

```python
[...]

# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

if getenv("POSTGRES_HOST"):
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': getenv("POSTGRES_DB"),
            'USER': getenv("POSTGRES_USER"),
            'PASSWORD': getenv("POSTGRES_HOST"),
            'HOST': getenv("POSTGRES_HOST"),
            'PORT': getenv("POSTGRES_PORT", '5432'),
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

[...]
```


## The manifests

I am using Kubernetes with Kustomize to manage the YAML files. The structure I
have currently is shown below.

```
deployment
├── base
│   ├── deployment.yaml
│   └── kustomization.yaml
└── dev
    ├── kustomization.yaml
    └── namespace.yaml
```

It consists only of a very simple deployment config (with a frustrating amount
of repitition in app labels, but such is life in Kubernetes), with folders and
kustomization.yaml organized to allow future extensibility.

I now have two things to add. A postgres database, which is going to be
ephemeral, and some way of managing secrets. I'd like to use sealed secrets, but
that does call on me to do some cluster configuring I hadn't actually planned
on. That's one of my distractions, with the other being a whole lot of hand
wringing about whether I should be using Helm for this. I'm also self-conscious
about all the best practices I'm violating in order to keep within the deadline.

In order, I'd like to do the following:

1. Remember that this is a one day challenge, not a truly production grade
   deployment
2. Include postgres statefulset in manifests (don't go too crazy on this)
3. Install sealed-secrets using a helm chart
4. Write simple deployment script using Ruby

I am not going to refactor to use Helm. I am not going to document *how* to
install sealed-secrets, as it's probably simple enough to configure anyhow. I am
going to get this done so I can stop staring at YAML files and create a
visualization or something instead.

## Installing sealed-secrets

I said I wouldn't document this. But I will. I wish I knew of some way to make
this a dependency of my project without actually making my project a Helm chart,
but I feel there's no low-code options available so I'm just going to describe
what I did.

**If you're reading this to learn how to do this yourself, now's as good a time
as any to point out that articles in my daily challenge series are decidely not
tutorials. I don't recommend using them as such.**

```console
$ helm repo add sealed-secrets https://bitnami-labs.github.io/sealed-secrets
$ helm install my-release sealed-secrets/sealed-secrets
```

That allows me to create sealed secrets, but now I'm questioning whether I even
need them. I should be able to generate the secret on the fly; the only thing
more secure than a secret that's encrypted at rest is a secret that never
rests in the first place!

The issue here is that my deployment is YAML-first instead of code-first.

Instead of thinking about how I can instruct the computer to generate these YAML
files for me - you know, as programmers do - I spent all my time writing these
YAML files by hand, like a peasant. It's time to take a step back and think
about whether I'm writing and source controlling (insert high level programming
language of choice here) or if I want to become a YAML engineer.

I need to wrap my deployment in a high level language. This is a Django project,
so let's go with Python. That's my next step.

I'll need a handful of python scripts following a convention like
`deploy-dev.py`, `deploy-test.py`, `deploy-prod.py`.



## Appendix

<details markdown="1">
<summary>More details</summary>

### Tech used today

 - [Madness Markdown Server](https://madness.dannyb.co/)
 - Kustomize
 - Kubernetes
 - Django
 - sealed-secrets

### Roadblocks

 - Burnt the midnight oil yesterday, so focus is troublesome

### Future challenge ideas

 - Create a visual for folder structures that can be integrated with blogs
 - Create a parallax design
 - Create a sidebar indicator of scroll position

</details>
