import React from 'react'
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';

export default function Loading({ src, ...restProps }) {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />
}

Loading.Spinner = function LoadingSpinner({children, ...restProps}) {
    return <div></div>
}

Loading.Lockbody = function LoadingLockbody({children, ...restProps}) {
    return <div></div>
}