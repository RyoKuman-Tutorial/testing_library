# QUERIES

## 1. 쿼리의 종류

- 쿼리는 Testing Library가 페이지에서 element 를 특정하기위해 제공하는 방법이다. <br/>
  종류로는 get, find, query 총 세개가 있다. <br/>
  다중 요소 검색은 뒤에 All 을 붙여준다.

- 1. GET

  - 쿼리에 대해 일치하는 노드를 반환한다. <br/>
    일치하는 요소가 없거나 둘 이상의 요소가 발견되면 오류를 발생시킨다.

- 2. QUERY

  - 쿼리에 대해 일치하는 노드를 반환한다.<br/>
    일치하는 요소가 없으면 null 반환, 둘 이상의 요소가 발견되면 오류를 발생시킨다.

- 3. FIND

  - 지정된 쿼리와 일치하는 요소가 발견되면, 해당 요소를 resolve 로써 갖는 promise 를 반환한다.<br/>
    요소가 발견되지 않거나 기본 시간 제한 1000ms 후에 둘 이상의 요소가 발견되면, <br/>
    reject 된 promise 를 반환한다.

## 2. BY

쿼리의 뒤에 붙는, 요소를 특정하는 방법이다. <br/>
ByRole, ByText 등이 있다.

### BY 의 종류

1. [ByRole](./1-1.ByRole/README.md)
2. [ByLabelText](./1-2.ByLabelText/README.md)
3. [ByPlaceholderText](./1-3.ByPlaceholderText/README.md)
4. [ByText](./1-4.ByText/README.md)
5. [ByDisplayValue](./1-5.ByDisplayValue/README.md)
6. [ByAltText](./1-6.ByAltText/README.md)
7. [ByTitle](./1-7.ByTitle/README.md)
8. [ByTestId](./1-8.ByTestId/README.md)
