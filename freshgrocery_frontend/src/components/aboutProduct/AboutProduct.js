import React from 'react';

import './AboutProduct.css';

const AboutProduct = () => {
    return <div className="about-product">
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center about-product-title">
                    <h3>About our products</h3>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="underline"></div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center py-4">
                    <div className="col-md-8 ">
                    <p className="fw-bold fs-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi lectus,
                        ornare vel tortor nec, porta laoreet metus. Curabitur malesuada purus risus,
                        in porta urna venenatis sed. Donec ac massa in enim tristique ultricies.
                        Nam rutrum diam vitae tortor hendrerit, a viverra nulla egestas.
                        Nunc ac nisi non nibh posuere commodo a nec lorem. Suspendisse eget arcu sit amet
                        ante efficitur cursus et quis odio. Etiam vel turpis varius, suscipit erat eget, facilisis ante.
                        Phasellus dui risus, vulputate at sem nec, scelerisque imperdiet nunc. Vestibulum scelerisque non
                        eros tincidunt malesuada. Cras volutpat diam eu porttitor iaculis. Vivamus viverra placerat libero,
                        id luctus sem venenatis eget.
                    </p>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>;
}

export default AboutProduct;
