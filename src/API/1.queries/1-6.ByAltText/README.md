# BYALTTEXT

## PARAMETERS

- container ( HTMLElemnet )
- text( TextMatch ),
- options?: {
  exact?: boolean = true,
  normalizer?: NormalizerFn,
  }): HTMLElement

## 예제 전체 코드

**[ByAltText.tsx](./ByAltText.tsx)**<br/>
**[ByAltText.test.tsx](./ByAltText.test.tsx)**<br/>

## CONTAINER

screen 사용 시에 생략이 가능하다. <br/>
전달받은 HTMLElement 의 내부에서 해당하는 element 를 특정한다. <br/>
예제 코드는 [링크](../1-1.ByRole/README.md)의 container와 같다. <br/>

## TEXT

label 의 innerText 값을 입력한다. <br/>
해당 값을 갖는 label이 가리키는 element 를 특정한다. <br/>
예제 코드는 [링크](../1-2.ByLabelText/README.md)의 text와 같다. <br/>
