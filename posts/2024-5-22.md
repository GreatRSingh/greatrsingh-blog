---
title: "Daily Log 22 May 2024"
subtitle: "Just a log of what I planned to do and what got done"
date: "2024-5-22"
---

## Plan

- [00:30 AM - 02:00 AM] Read DM21 Paper. [1]
- [02:00 AM - 09:30 AM] Sleep.
- [10:00 AM - 12:00 PM] Samsung Hackathon Meeting.
- [01:00 PM - 03:00 PM]
    - DFT PR-7 Fixing
    - ODE Solver Tutorial
- [03:00 PM - 03:30 PM] Stethaim Methodology Writing.
- [05:00 PM - 08:00 PM] Family Time.
- [08:00 PM - 08:30 PM] Stethaim Meet.
- [08:30 PM - 10:00 PM] DFS Meet.
- [10:30 PM - 12:00 AM] DM21 First Blog.
- [12:00 AM - 02:00 AM] DFT PR-8 Work

## New Things Learned

### ELU (Exponential Linear Unit)

<p align="center">
  <img src="https://latex.codecogs.com/svg.latex?%5C%5C%20f(x)%3D%20%5Cbegin%7Bcases%7D%20x%20%26%20%5Ctext%7Bif%20%7D%20x%20%3E%200%20%5C%5C%5Calpha(e%5E%7Bx%7D%20-%201)%20%26%20%5Ctext%7Bif%20%7D%20x%20%5Cleq%200%5Cend%7Bcases%7D"/>
</p>

I first time got to know about this non linear activation function in DM21 paper.

In contrast to ReLUs [2], ELUs have negative values which allows them to push mean unit activations closer to zero like batch normalization but with lower computational complexity. Mean shifts toward zero speed up learning by bringing the normal gradient closer to the unit natural gradient because of a reduced bias shift effect. While LReLUs[2] and PReLUs[2] have negative values, too, they do not ensure a noise-robust deactivation state. ELUs saturate to a negative value with smaller inputs and thereby decrease the forward propagated variation and information.

Observations:
1. All values when x is a large number it gives of -1 as the result.

## Final
1. Mostly worked on reading DM21 Suplimentary docs. Wasted some time here and there.

2. I am facing some errors in representing formulas on the website, will look into it in the morning.

3. Samsung meeting went well, nothing much i have to answer the 4th question. And find some algorithm for forest fire. And this meet ended in just 30 min or less it started 30 min late as well.

4. Now i have some extra time so i will use this to fix the error in the site.

5. I was able to fix the issue with the help of Sonali :blush: . The solution works fine but i don't like that now the written thing is not very intutive.

6. Stethaim Meet got delayed so now i have to reschedule things, but i have DFS meet from 8:30 pm and this stethaim meet is starting from 8 so a i am in a little bit pinch.

## References

[1] https://deepmind.google/discover/blog/simulating-matter-on-the-quantum-scale-with-ai/

[2] https://en.wikipedia.org/wiki/Rectifier_(neural_networks)
