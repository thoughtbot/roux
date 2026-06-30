# Roux Changelog

## 0.3.0

- Add new component styles ([#17](https://github.com/thoughtbot/roux/pull/17))
- Add new 11ty docs site running in GitHub Pages (<https://roux.thoughtbot.dev/>) ([#17](https://github.com/thoughtbot/roux/pull/17))
- Fix range input label spacing ([#20](https://github.com/thoughtbot/roux/pull/20))
- Progressively enhance modals with animation ([#24](https://github.com/thoughtbot/roux/pull/24))
- Use a larger font for disclosure summaries ([#23](https://github.com/thoughtbot/roux/pull/23))

## 0.2.2

- WE DON'T NEED BORDER-BOX! Remove `box-sizing: border-box` from normalize. This results in form inputs being extra wide. We resolve this by removing `width: 100%;` from inputs. Because we're using flexbox layout, the 100% is unnecessary. ([#18](https://github.com/thoughtbot/roux/pull/18))
  - Refer to [Kevin Powell's video on box-sizing](https://www.youtube.com/watch?v=PtAcpV6TAGM) for an explanation of why this change is a good idea

## 0.2.1

- Overhaul the readme for Roux's use case and how to dive into it using
