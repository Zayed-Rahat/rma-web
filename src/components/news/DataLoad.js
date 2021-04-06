import React from 'react';
const DataLoad = ({ NewsLoad }) => {
    return (
        <>

            {NewsLoad.map((News, index) => {
                return (
                    <div key={index}>

                        <div class="col-md-3">
                            <img className="ProductImg" src={News.Url} alt="" />
                        </div>

                        <div class="rigth_lekha_margin mb-4">


                                <h2 className="arduino1">{News.Title}</h2>
                                <p className="arduino">{News.Body}</p>

                        </div>
                    </div>
                );

            }
            )}
        </>
    );
};

export default DataLoad;





