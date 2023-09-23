---
title: "Min-Max Optimization Made Simple: Approximating the Proximal Point Method via Contraction Maps"
collection: publications
permalink: /publication/ceg-sosa
excerpt: 'Joint work with Volkan Cevher, Georgios Piliouras and Stratis Skoulakis'
date: Jan 2023
venue: 'SOSA'
# paperurl: 'https://arxiv.org/abs/2012.08382'
# citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---
In this paper we present a first-order method that admits near-optimal convergence rates for convex/concave min-max problems while requiring a significantly simpler analysis than standard methods as (EG) and (OGDA). Similarly to the seminal work of Nemirovski and  the recent approach of Piliouras et al. in normal form games, our work is based on the fact that the update rule of the *Proximal Point method* (PP) can be approximated up to accuracy $\epsilon$ with only $O(\log 1/\epsilon)$ additional gradient-calls through the iterations of a contraction map. Then combining the analysis of (PP) method with an error-propagation analysis we establish that the resulting first order method, called *Clairvoyant Extra Gradient*, admits near-optimal time-average convergence for general domains and last-iterate convergence in the unconstrained case.  

[arxiv link](https://arxiv.org/abs/2301.03931)

<!-- Recommended citation: Your Name, You. (2009). "Paper Title Number 1." <i>Journal 1</i>. 1(1). -->