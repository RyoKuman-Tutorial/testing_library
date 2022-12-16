# BYTITLE

## PARAMETERS

- container ( HTMLElemnet )
- title ( TextMatch ),
- options?: {
  exact?: boolean = true,
  normalizer?: NormalizerFn,
  }): HTMLElement

# 예제 전체 코드

**[ByTitle.tsx](./ByTitle.tsx)**<br/>
**[ByTitle.test.tsx](./ByTitle.test.tsx)**<br/>

## CONTAINER

screen 사용 시에 생략이 가능하다. <br/>
전달받은 HTMLElement 의 내부에서 해당하는 element 를 특정한다. <br/>
예제 코드는 [링크](../1-1.ByRole/README.md)의 container와 같다. <br/>

## TITLE

해당 값을 title 로 갖는 element 를 특정한다. <br/>
