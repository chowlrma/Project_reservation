//SearchClickedModal.js 
//부모

const [modalCondition, setModalCondition] = useState(false);
//모달창은 초기화면에서는 보이지 않기 때문에 초깃값은 false

const closeRegionModal = () => {
	setModalCondition(false)
  	//또는 
  	setModalCondition(!modalCondition)
}
//Modal창의 상태가 true라면 보여지고 fasle라면 보이지 않게 한다.

return 
//삼항 연산자를 작성하여 modalCondition이 true일 때 SelectRegion이 보여지도록
  {modalCondition && (
    <SelectRegion
    closeRegionModal={() => setModalCondition(!modalCondition)}/>
   )}
   //모달창 컴포넌트에 closeRegionModal 함수도 넘겨주기