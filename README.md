# gdsc-design-seed

GDSC DJU의 디자인 시스템 모노레포입니다.

Docs https://design.gdsc-dju.com

Theme
[@gdsc-dju/styled-components-theme](https://github.com/GDSC-Daejin/design-seed/blob/master/packages/styled-components-theme/README.md)

Components
[@gdsc-dju/styled-components](https://github.com/GDSC-Daejin/design-seed/blob/master/packages/styled-components/README.md)

## Git Flow / Commit convention rule

### Branch Rule
master과 develop을 제외한 다른 브랜치는 도메인 별로 다른 브랜치를 사용합니다.

master - 메인 브랜치

feature - 새로운 기능 브랜치

refactor - 코드 리팩토링

hotfix - 급한 경우만 사용하는 브랜치

feature/프로젝트 이름/issue번호-기능이름

ex) feature/storybook/29-navigation

### Commit convention rule
feat : 새로운 기능에 대한 커밋

fix : 버그 수정에 대한 커밋

build : 빌드 관련 파일 수정에 대한 커밋

chore : 그 외 자잘한 수정에 대한 커밋

ci : CI관련 설정 수정에 대한 커밋

docs : 문서 수정에 대한 커밋

style : 코드 스타일 혹은 포맷 등에 관한 커밋

refactor : 코드 리팩토링에 대한 커밋

test : 테스트 코드 수정에 대한 커밋

## Getting started
```shell
> yarn install
> yarn workspace {project name} install
> yarn workspace {project name} dev && vite
```
