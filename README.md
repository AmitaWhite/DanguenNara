<<<<<<< HEAD

- BrainStorming

  - Home 화면은 우선 FlatList 로 등록된 물품들을 쭉 나열해놓자

  1. 하나의 컴포넌트 카드 - 메인 사진이 먼저 눈에 들어오고 -> 이 사진은 홈 화면에서 바로 넘겨 볼 수 있어야함 (인스타 처럼)
  2. 동 단위 장소 표시 되어야 함 - 제목과, 가격이 보여야 함
  3. 이 카드를 클릭 했을 때, 등록된 상세 게시글내용 및 채팅하기가 가능해야 한다.

- TODO

[v] 프로젝트 초기 세팅 - Home , Chat , Profile Tab Navigation

[v] apple map Compent 사용

[] Home 화면에 사용할 데이터 리스트
[v] dummayData.js 로 관리
[v] SliderView 컴포넌트 생성 -> Daily Recommendation 목록
1.[] Recommend -> nomal 이 Vertical Scroll로Sticky 하게 진입하는 UI
[] Detail Page 생성 -> Recommend 와 일반 게시글에서 이동될 상세 페이지
[] (+) 게시물 등록 toast 버튼 -> 게시물 등록하는 page
[] SearchBar 생성
1.[] 사진 ScrollView
2.[] 게시내용
3.[] 가격
4.[] 채팅기능
5.[] 희망 거래 장소 (MapView)
6.[] 이외 보여야 할 것 -> 추가 정리 후 기록
[] Home Page View 정리

[] Chat 화면 구현
[] 상세 페이지에서 이어져야함  
 []

[] Profile 설정

- 어려웠던 점
  1. ScrollView 를 상대 넓이로 조절해, 스와이프 제스처를 자연스럽게 보이게 하는 게 힘들었다.
     - 일단 Dimension.get('window')를 통해 기기 자체 window를 절대 값으로 구해 계산 해 봤는데, 섬세하게 조절하려고 하니 쉽지 않았음
