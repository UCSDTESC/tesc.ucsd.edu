import React, { Component } from 'react';

class Pictures extends Component {
    render() {
        //write your css in src/scss/apps/enspire/components/_pics.scss
        return (
            <div className="w-100 enspire-pics">
                <div class="container">
                    <div className="enspire-pics__head">
                        <b>Photos</b>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <img
                                class="enspire-pics__photo"
                                src="/enspire/IMG_4384.JPG"
                                alt=""
                            />
                        </div>
                        <div class="col-md-6">
                            <img
                                class="enspire-pics__photo"
                                src="/enspire/IMG_4760.JPG"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <img
                                class="enspire-pics__photo"
                                src="/enspire/IMG_8210.JPG"
                                alt=""
                            />
                        </div>
                        <div class="col-md-6">
                            <img
                                class="enspire-pics__photo"
                                src="/enspire/IMG_8545.JPG"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <img
                                class="enspire-pics__photo"
                                src="/enspire/IMG_5862.JPG"
                                alt=""
                            />
                        </div>
                        <div class="col-md-6">
                            <img
                                class="enspire-pics__photo"
                                src="/enspire/IMG_9213.JPG"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pictures;
