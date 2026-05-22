# Roux Changelog

## 0.2.2

- WE DON'T NEED BORDER-BOX! Removed `box-sizing: border-box` from normalize. This resulted in form inputs being extra wide. We resolve this by removing `width: 100%;` from inputs. Because we're using flexbox layout, the 100% was unnecessary.
  - Refer to [Kevin Powell's video on box-sizing](https://www.youtube.com/watch?v=PtAcpV6TAGM) for an explanation of why this change is a good idea

## 0.2.1

- Overhaul the readme for Roux's use case and how to dive into it using
