import React from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';



const SelectDate = ({ onChange, startDate, endDate, closeWhenModal }) => {
  return (
    <>
      <ModalOutside onClick={closeWhenModal} />
      <SelectWrapper onClick={e => e.stopPropagation()}>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          minDate={new Date()} //현재시점의 이전 달 비활성화
          locale={ko} //한국말 (import 해야함)
          isClearable={true}
          monthsShown={2}
          showPopperArrow={false} //디폴트 스타일로 있는 뾰족한 화살표 없애기
          dateFormat="yyyy/MM/dd"
        />
      </SelectWrapper>
    </>
  );
};