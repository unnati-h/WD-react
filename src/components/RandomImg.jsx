function RandomImg({src,alt})
{
    const imgStyle={
        width:'200px',
        height:'200px'
    };

    return (<img src={src} alt={alt} style={imgStyle}/>);
}

export default RandomImg;