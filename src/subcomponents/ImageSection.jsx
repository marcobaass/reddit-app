import { useEffect } from "react";
import { Carousel, CarouselItem } from "reactstrap";

function Content() {
    useEffect(() => {
        fetch()
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log('There was an error!', err));
    }, []);


    const exampleData = [];

    const carouselItemData = exampleData.map((example) => {
        return (
            <CarouselItem
            key={example.src}
            >
                <img src={example.src} alt={example.altText} />
            </CarouselItem>
        );
    });

    return (
        <Carousel>
            {carouselItemData}
        </Carousel>
    )
}


export default Content;