import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { BsChat } from "react-icons/bs"
import { LOGO } from "../../../../shared/assets/images";
function Chat() {
    const [show, setShow] = useState(false)
    return (
        <div className="container-plugin">
            <section className="chat">
                <div className="chat__content">
                    <button className="chat__content-btn" onClick={() => setShow(true)}>
                        <span className="chat__content-btn-icon me-2"><BsChat /></span>
                        Chat
                    </button>
                    <div className={`chat__content-box ${show && "active"}`}>
                        <div className="chat__content-box-header p-2">
                            <div className="row align-items-center">
                                <div className="col"></div>
                                <div className="col">
                                    <h6 className="mb-0 chat__content-box-header-title text-center">
                                        Live Chat
                                    </h6>
                                </div>
                                <div className="col d-flex justify-content-end pe-3">
                                    <span onClick={() => setShow(false)} className="chat__content-box-header-close px-3">–</span>
                                </div>
                            </div>
                        </div>
                        <div className="chat__content-box-label shadow px-3 py-1">
                            <div className="d-flex align-items-center">
                                <div className="rounded rounded-circle">
                                    <img src={LOGO.logoHeader} alt="" style={{ width: "50px" }} className="img-fluid" />
                                </div>
                                <div className="ms-2">
                                    <small><strong>Qode Interactive</strong></small>
                                    <small className="mb-0 d-block text-secondary">Product Inquiries</small>
                                </div>
                            </div>
                        </div>
                        <div className="chat__content-box-body">
                            <div className="chat__content-box-body-inbox px-3">
                                <div className="">
                                    <div className="d-flex justify-content-start align-items-end my-2">
                                        <div className="chat__content-box-body-inbox-avatar d-flex align-items-center">
                                            <img src = {LOGO.logoHeader} alt = "" className="img-fluid p-1"/>
                                        </div>
                                        <p className="chat__content-box-body-inbox-get text-start mb-0 ms-2">
                                            Welcome to Shop! Can I help you?
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-end my-2 align-items-center">
                                        <span className="chat__content-box-body-inbox-send-icon"><BiCheck/></span>
                                        <p className="chat__content-box-body-inbox-send mb-0">
                                            Hello. I want to buy some vegetables!
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="chat__content-box-body-send px-3">
                                <textarea className="chat__content-box-body-send-input" placeholder="Type a message here..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Chat;