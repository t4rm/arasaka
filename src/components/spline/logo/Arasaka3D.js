import React, { Suspense, useEffect, useState } from 'react';
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

const Spline = React.lazy(() => import('@splinetool/react-spline'));
const Arasaka3D = () => {
    const [loaded, setLoaded] = useState(false);
    gsap.registerPlugin(CustomEase)

    useEffect(() => {
        if (loaded) {
            gsap.timeline()
                .fromTo(".spline-canvas", { opacity: 0 }, { opacity: 1, duration: 2 })
        }
    }, [loaded]);

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Spline className='spline-canvas' style={{ height: "min(20vh, 350px)", width: "auto", position: "relative" }} scene="https://prod.spline.design/xNXSUkWYTZmvps01/scene.splinecode" onLoad={() => setLoaded(true)} />
        </Suspense>
    );
}

export default Arasaka3D;