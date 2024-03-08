import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { parseCoordinates } from '../../helpers';
import { useState } from 'react';

export const InvestMap = ({ objects, isOpenInfoPanel, setIsOpenInfoPanel, clickMarker }) => {
    const [isClick, setIsClick] = useState(false);

    // const clickMarker = (input) => {
    //     console.log(input)
    //     setIsOpenInfoPanel(!isOpenInfoPanel)
    // }

    return (
        <YMaps>
            <div style={{ width: "100%", height: "100%" }}>
                <Map defaultState={{ center: [43.900634306526236, 41.89142069900599], zoom: 9 }} width="100%" height="100%">
                    {Object.keys(objects).map((key) => {
                        const object = objects[key];
                        const temp = object['electricitySupply'];

                        return Object.keys(temp).map((innerKey) => {
                            const coordinates = parseCoordinates(temp[innerKey].coordinates);
                            return <Placemark key={`${key}-${innerKey}`}
                                options={{
                                    iconLayout: 'default#image',
                                    iconImageHref: isClick ? object.onMarker : object.offMarker,
                                    iconImageSize: [50, 50],
                                }}
                                geometry={coordinates}
                                onClick={() => { clickMarker(temp[innerKey]) }}
                            />;
                        });
                    })}
                </Map>
            </div>
        </YMaps>
    );
};