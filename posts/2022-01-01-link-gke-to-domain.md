---
layout: post
title: Daily Tech Challenge \#3
subtitle: Use GKE with a domain you own
date: 2022-01-01
---

Exposing routes in Google Kubernetes Engine to a domain name I own is something
I've done before in the past, but these challenges are not only an opportunity
to try new things, but a chance to practice things I already know, whether I
have them down pat or am starting to get rusty (as is the case here).

Luckily, since I'm kind of tired today, linking Google Kubernetes Engine to a
domain you control is not difficult at all. Three steps, really, if you want to
go the Ingress route, as I do (the alternative is to use Service resources, but
that's less flexible).

1. Create a static global IP
2. Configure your domain's DNS to point to this static IP
3. Create an ingress resource for your deployment

## Step by step

### 1. Create a static global IP address

There's not much to it other than this. You could equally use click-ops, but I
like using the command line for IP address reservations in particular.

```console
$ gcloud compute addresses create dtc0003 --global
$ gcloud compute addresses describe dtc0003 --global 
```

### 2. Configure your domain's DNS to point to the static IP

I'm not sure what subdomains I'll use in the future, so I decided to link the
reserved address to my domain via a wildcard record. Concretely, that meant
creating an "A" record for *.textninja.net, setting the data to the IP address I
just reserved. Using Google Domains, updating the DNS entry is very
straightforward. I just chose my domain from the list in the "My Domains"
section and clicked "DNS" to configure.

![Screen showing A record configuration in Google Domains](reserved-ip.png)

### 3. Create an ingress resource for your deployment



## Final result

I ended up with a funky rotating cube deployed to http://dtc0003.textninja.net.
I then promptly deleted it, because why would I pay for that.

![A funky cube](funky-cube.png)

Some other day, I'll have to walk through the set up of TLS on GKE using
LetsEncrypt.

## Future challenge ideas

Today, for reasons unknown, I came up with the following ideas for future
tech challenges.

 - Build twilio call answering bot with dial pad menu
 - Configure istio
 - Write implementation of Djikstra's pathfinding algorithm
 - Use terraform with GKE
 - Create GKE cluster with self-destruct capability
 - Use ansible with Kubernetes
 - Create a pretty Venn diagram using d3
 - Configure Google Kubernetes Engine with custom domain to use TLS

This time tomorrow, though, I'll work on getting a themed Jekyll blog up and
running.
