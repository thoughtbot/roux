# Roux Changelog

## 0.3.0

- Added new component styles ([#17](https://github.com/thoughtbot/roux/pull/17))
- Added new 11ty docs site running in GitHub pages (https://roux.thoughtbot.dev/)  ([#17](https://github.com/thoughtbot/roux/pull/17))
- Fixed range input label spacing ([#20](https://github.com/thoughtbot/roux/pull/20))
- Progressively enhance modals with animation ([#24](https://github.com/thoughtbot/roux/pull/24))
- Use a larger font for disclosure summaires ([#23](https://github.com/thoughtbot/roux/pull/23))

## 0.2.2

- WE DON'T NEED BORDER-BOX! Removed `box-sizing: border-box` from normalize. This resulted in form inputs being extra wide. We resolve this by removing `width: 100%;` from inputs. Because we're using flexbox layout, the 100% was unnecessary. ([#18](https://github.com/thoughtbot/roux/pull/18))
  - Refer to [Kevin Powell's video on box-sizing](https://www.youtube.com/watch?v=PtAcpV6TAGM) for an explanation of why this change is a good idea

## 0.2.1

- Overhaul the readme for Roux's use case and how to dive into it using
