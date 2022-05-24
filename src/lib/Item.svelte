<script> 
    export let imgUrl = 'GenreKeys.png';
    export let imgAlt = "Preview of Genre Keys Project";
    export let desciprtion= "Spotify Genre Keys"; 
</script>

<div class='wrapper'>
    <p>{desciprtion}</p>
    <div class='img-background'>
        <img src= {imgUrl} alt={imgAlt}>
    </div>
</div>

<style>
    img {
        width: 100%;
        filter: grayscale(1);
        opacity: 0.6;
    }
    div.img-background {
        background-color: #564f6f;
        /*border-bottom: 5px solid #802bb1;*/
    }
    p {
        text-align: center;
        margin-bottom: 0;
    }
    div {
        max-width: 175px;
        max-height: 175px;
}
</style>