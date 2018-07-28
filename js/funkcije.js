var logoHeight = $('.slika-img img').height();
    if (logoHeight < 250) {
        var margintop = (250 - logoHeight) / 2;
        $('.slika img').css('margin-top', margintop);
    }