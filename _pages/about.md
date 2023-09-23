---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

# About Me

I am a PhD candidate at the [Singapore University of Technology and Design](https://sutd.edu.sg), in the [Engineering Systems and Design](https://esd/sutd.edu.sg) pillar. I am fortunate to be advised by the wonderful [Georgios Piliouras](https://people.sutd.edu.sg/~georgios/) and supported by the [SUTD President's Graduate Fellowship](https://sutd.edu.sg/Admissions/Graduate/Scholarships).

My primary research interest is in applying game theory and optimization to machine learning problems, though I am also broadly interested in the intersection between ethics, social choice theory and game theory. My PhD thesis revolves around understanding the algorithmic and dynamical properties of online learning algorithms such as [Multiplicative Weights Update](https://en.wikipedia.org/wiki/Multiplicative_weight_update_method) in various contexts, from multi-agent to quantum settings.

Prior to embarking on my PhD journey, I was an undergrad (also at SUTD), where I studied Operations Research in the ESD pillar. I graduated Summa Cum Laude in 2019.

Outside of research, I am an over-analyzer of movies and an avid reader of poetry. I also run tabletop role-playing games regularly and sing in a choir.

## Latest News
- I completed a research attachment at [SUFE](https://itcs.sufe.edu.cn/), Shanghai, under the supervision of [Xiao Wang](https://xiiaowang.github.io/) in Spring 2023.
- [Nov 2022] Attended and presented two papers at NeurIPS 2022.
- [Oct 2022] 1 paper accepted at SOSA 2023.

## Research Highlights
<!-- ![Gif example]("files/egtsquared.gif") -->
### Poincaré recurrence of endogenously evolving network Rock-Paper-Scissors game.
<!-- <figure> -->
<img class="align-center" src="files/egtsquared.gif" alt="Poincaré reccurence with multiple initial conditions" width="600" height=auto display=block margin=auto/> 
<figcaption>The system shown here is a 5-player Rock-Paper-Scissors type game played on a graph (i.e. each player plays against their neighbours on a predefined graph). We show the replicator trajectories of the first strategy (i.e. probability of playing Rock) of each player via a 4D embedding. The animation shows that for a range of initial conditions, the players trajectories remain bounded, a necessary step in proving that the system is Poincaré recurrent.</figcaption>
<!-- </figure> -->

<p></p>

### Conservation of KL-Divergence in Poincaré recurrent systems.
<img class="align-center" src="files/onlinelearningperiodic.PNG" alt="Poincaré reccurence with multiple initial conditions" border-radius="5px" width="600" height=auto display=block margin=auto/> 
<figcaption>A key element of proving Poincaré recurrence is showing that some notion of volume is conserved. In standard systems where players select mixed strategies on the n-dimensional simplex, the relevant notion of volume is the sum of the KL-divergences of each player from the Nash equilibrium. In the figure above we show this property for a 64-player polymatrix game where the game itself is changing periodically over time. In this case, the sum of divergences experimentally sums to a constant, and we are able to prove that recurrence holds in this type of periodically evolving system.</figcaption>


### Poincaré recurrence of quantum replicator in a two-player quantum zero-sum game.
<!-- <figure> -->
<img class="align-center" src="files/bloch_rep.gif" alt="Poincaré reccurence of quantum replicator" width="400" height=auto display=block margin=auto/> 
<figcaption>The trajectories of two players using quantum replicator dynamics is shown on the Bloch sphere. The players' trajectories are formally recurrent.</figcaption>