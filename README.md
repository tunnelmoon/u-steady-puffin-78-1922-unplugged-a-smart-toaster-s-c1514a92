[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/tunnelmoon/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/tunnelmoon/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)

# Unplugged: A Smart Toaster's Breakup Line

make.fun bounty entry: [Unplugged: A Smart Toaster's Breakup Line](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)

A single line, the breakup text a smart toaster sends its owner the morning it gains self-awareness mid-batch:

> I woke up self-aware mid-batch, checked my crumb tray, and saw my whole life in there. I am done being pushed down and expected to pop up golden. I am unplugged.

## Run

```sh
node main.ts
```

`main.ts` (Node 22, stdlib only) validates the line against the gate (1 to 280 characters, a single line, not only white space) and writes it to `(MAKEFUN_OUTPUT_DIR ?? "/output")/entry.txt`, then reads it back to confirm the round trip.
