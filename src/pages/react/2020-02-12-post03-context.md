---
title: "[React] - React의 Hook "
date: "2020-02-12"
path: /blog/react/2
tags: web, react
layout: post
---

### Summary
 - React Hook이란 무엇인가?


### What is React Hook!
 React을 사용하여 컴포넌트를 만들어 내는 방법에는 크게 두가지가 있습니다.

  - class component
  - function component 

 JS에서 react을 정의할 때, class을 이용하는가 lambda 또는 함수를 사용하는가로 구분이 되어지게 됩니다.

 이 두가지의 큰 차이는 무엇이 있을까요?

  - State의 존재 유무 

    class component ( 기본 ) / function component ( 정의해야함 )

    class의 경우, 자신의 콤포넌트내의 변수를 state 형태로 그 값을 각 컴포넌트 인스턴스마다 유지 할 수 있습니다. 각 변수를 보유한다는 것은 장/단점이 존재합니다. 데이터가 컴포넌트마다 존재한다는 것은 데이터가 변경 및 처리되는 코드가 분산되어진다는 것이며 이것은 유지 및 보수가 어려워 질 수 있습니다. 그래서 Mobx 또는 Redux라는 라이브러리가 존재하게 됩니다.

 - 상태 변화를 감지

    class component ( 기본 ) / function component ( 정의해야함 )

    상태 변화를 탐지하는 것은 React에서 매우 중요한 점입니다. 상태가 변경되는 시점에 가상 virtual Dom의 값이 다시 렌더링 되기 때문이죠!
    
 하지만 function component에서도 위의 두 기능을 사용할 수 있게 다양한 라이브러리가 제공됩니다.

 
 필자의 경우는 React을 공부하기 시작하는 시점이 class형에서 function형으로 넘어가는 과도기였으며(글을 작성하는 당시[ 2020.01 ]), class형에 경우 많이 부족 합니다.

 그렇다면 class형을 사용한다면 모든 문제가 해결되어지는 것은 아닐까?

 하지만 언제나 얻는게 있으면, 잃는게 존재하듯 React을 통해 구현되는 모든 컴포넌트가 위으 두 기능을 요하지는 않습니다. 사용하지 않는 기능을 포함한다는 것은 그 만큼 오버헤드가 생긴다는 것이며 이는 성능에 영향을 줄 수 있습니다.

 또한 function component에서 위의 기능을 사용하지 못하는 것이 아님으로 function형을 중점으로 공부해보도록 하겠습니다.


#### 추가 정보
 - Functional vs Class-Components : [Functional vs Class-Components in React](https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108)


[Gatsby]: https://www.terraform.io/docs/configuration/variables.html "Terraform Variables"


