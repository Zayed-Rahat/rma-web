import React from 'react';

const Message = () => {
    return (
        <>
            
            <div>
            <h2 class="kit_h text-center">Send Us a message</h2>
            <form>
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Name"/>
                    </div>
                    <div class="form-group col">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Phone"/>
                    </div>

                </div>

                <div class="row">
                    <div class="form-group col-md-10">
                        <textarea class="text_form form-control" id="exampleFormControlTextarea1"
                            placeholder="Message"></textarea>
                    </div>
                    <div class="col-md-2"><button type="button" class="btn_kit btn btn-primary">SUBMIT</button>
                    </div>
                </div>
            </form>
          </div>
        </>
    );
};

export default Message;