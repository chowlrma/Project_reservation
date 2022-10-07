//SelectRegion.js
//자식

const SelectRegion = ({ closeRegionModal }) => {
    //모달창 닫히는 함수 props로 가져오기
      
      return (
        <>
          <ModalOutside onClick={closeRegionModal} />
        //바깥 영역 클릭시 함수 작동하여 모달창 닫힘
          <SelectWrapper onClick={e => e.stopPropagation()}>
        //모달창 자체를 클릭하면 모달창이 닫히지 않게!
            <JejuCity onClick={jejuClicked}>제주시</JejuCity>
            <SeogwipoCity onClick={seogwipoClicked}>서귀포시</SeogwipoCity>
          </SelectWrapper>
        </>
      );
    };