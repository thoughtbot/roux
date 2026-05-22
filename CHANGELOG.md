# Roux Changelog

## Changes

### 1.0.0

- WE DON'T NEED BORDER-BOX! Removed `box-sizing: border-box` from normalize. This resulted in form inputs being extra wide. We resolve this by removing `width: 100%;` from inputs. Because we're using flexbox layout, the 100% was unnecessary.
