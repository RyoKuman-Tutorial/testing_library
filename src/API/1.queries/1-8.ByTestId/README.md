# BYTESTID

## PARAMETERS

- container ( HTMLElemnet )
- text( TextMatch ),
- options?: {
  exact?: boolean = true,
  normalizer?: NormalizerFn,
  }): HTMLElement

## 예제 전체 코드

**[ByTestId.tsx](./ByTestId.tsx)**<br/>
**[ByTestId.test.tsx](./ByTestId.test.tsx)**<br/>

## CONTAINER

screen 사용 시에 생략이 가능하다. <br/>
전달받은 HTMLElement 의 내부에서 해당하는 element 를 특정한다. <br/>
예제 코드는 [링크](../1-1.ByRole/README.md)의 container와 같다. <br/>

## TEXT

태그의 옵션 중 하나인 test-id 의 값을 입력한다. <br/>
해당 값을 갖는 label이 가리키는 element 를 특정한다. <br/>
