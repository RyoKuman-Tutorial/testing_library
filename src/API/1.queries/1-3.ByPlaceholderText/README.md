# BYPlLACEHOLDERTEXT

## PARAMETERS

- container ( HTMLElemnet )
- text( TextMatch ),
- options?: {
  exact?: boolean = true,
  normalizer?: NormalizerFn,
  }): HTMLElement

## 예제 전체 코드

**[ByPlaceHolderText.tsx](./ByPlaceHolderText.tsx)**<br/>
**[ByPlaceHolderText.test.tsx](./ByPlaceHolderText.test.tsx)**<br/>

## CONTAINER

screen 사용 시에 생략이 가능하다. <br/>
전달받은 HTMLElement 의 내부에서 해당하는 element 를 특정한다. <br/>
예제 코드는 [링크](../1-1.ByRole/README.md)의 container와 같다. <br/>

## TEXT

placeholder 의 값을 입력한다. <br/>
전달받은 값과 같은 placeholder 를 갖는 element 를 특정한다. <br/>
