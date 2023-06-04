import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function ModalAlertPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setaddress] = useState("");
  const successClick = () => {
    Modal.success({
      content: "some messages...some messages...",
    });
  };
  const failClick = () => {
    Modal.error({
      content: "some messages...some messages...",
    });
  };

  const showModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleComplete = (data) => {
    setaddress(data.address);
    setIsModalOpen(false);
  };
  return (
    <>
      <button onClick={successClick}>성공했을때!</button>
      <button onClick={failClick}>실패했을떄!</button>
      <button onClick={showModal}>openModal</button>
      {/* {모델 숨기는방식 1. 모달 숨기는하는 방법(ex) 이력서 등)} */}
      {isModalOpen && (
        <Modal open={true} onOk={showModal} onCancel={showModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} /> <p>{address}</p>
          <p>Some contents...</p>
        </Modal>
      )}

      {/* {모델 종료방식 2. 모달 삭제하는 방법(ex) 신용카드 비밀번호 등)} */}
      {/* <Modal open={isModalOpen} onOk={showModal} onCancel={showModal}>
        <DaumPostcodeEmbed onComplete={handleComplete} /> <p>{address}</p>
        <p>Some contents...</p>
      </Modal> */}
    </>
  );
}
