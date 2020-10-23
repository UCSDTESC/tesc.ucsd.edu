import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';

function BoardMember(props) {
    const [showFull, setShowFull] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (!props.isActive && showFull) {
            hide();
        }
        if (props.isActive && !showFull) {
            show();
        }
    });

    const hide = () => {
        const curr = $(ref.current).find('.board__member-full').eq(0);
        curr.hide();
        setShowFull(false);
    };

    const show = () => {
        const curr = $(ref.current).find('.board__member-full').eq(0);
        curr.slideDown();
        setShowFull(true);
    };

    const click = () => {
        if (showFull) {
            return props.onActive(-1);
        }
        props.onActive(props.val);
    };

    const { data, idx } = props;
    const id = data.role.toLowerCase().replace(/ /g, '');
    const firstName = data.name.split(' ')[0];

    return (
        <>
            <div className="col-md-3 m-0 px-1 py-1" id={id} ref={ref}>
                <div
                    className={
                        showFull
                            ? `board__member-active-${idx}`
                            : 'board__member'
                    }
                    onClick={click}
                >
                    <div
                        src={data.img}
                        className="board__member-img"
                        style={{ backgroundImage: `url(${data.img})` }}
                    >
                        {' '}
                    </div>
                    <div className="text-center board__member-name">
                        {data.name}
                    </div>
                    <div className="text-center board__member-title">
                        {data.role}
                    </div>
                </div>
                <div className={`board__member-full board__member-full-${idx}`}>
                    <div className="full__title">{data.role}</div>
                    <div className="full__name">{data.name}</div>

                    <p className="full__bio">{data.bio}</p>

                    {data.link && (
                        <div className="full__connect">
                            Connect with {firstName} on{' '}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={data.link}
                            >
                                {' '}
                                <span>LinkedIn</span>{' '}
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    )}
                    <div className="full__connect">
                        Email {firstName} at{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={'mailto:' + data.email}
                        >
                            {' '}
                            <span>{data.email}</span>{' '}
                            <i className="far fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BoardMember;
