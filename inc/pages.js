var pages = {
    frontpage: `
    <!--hero mynd sem er í vh. 100% -->
    <div class="hero_container">
        <div class="hero_content">
            <h1>Nærðu sál og líkama</h1>
            <div class= "hero_buttons">
                <button type="button">Kennaranám</button>
                <button type="button">spurningar & svör</button>
                <button type="button">Öll námskeið</button>
            </div>
        </div>
    </div>

    <div class="gutter">
        <!--all fyrir neðan hero mynd / forsidu -->
        <div class= "text_after_hero">
            <h2> Lítið og persónulegt Jógasetur þar sem þú finnur fjölbreytta jógatíma við þitt hæfi, við tökum vel á móti þér</h2>
        </div>

        <div class= "container_box_forsida">
            <div class= box_1>
                <button type="button" onclick="showAllClassesPageFunction()">Fjölbreyttir tímar í boði</button>
            </div>

            <!-- hér er tímataflan á forsíðu -->
            <div class="time_container_carousel">
                <div class="time_container" id="time_container"></div>
            </div>
        </div>
    
        <!-- hér eru 3 litlir kassar á forsíðu -->

        <div class= box_3_4_5>
            <a href="#" alt="meðgöngujóga">
                <div class=box>
                    <img src="images/medgongu_forsida.png" alt="">
                    <h3>Meðgöngujóga</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mi consectetur</p>
                </div>
            </a>
            <a href="#" alt="kennaranám">
                <div class=box>
                    <img src="images/kennaran_forsida.png" alt="">
                    <h3>Kennaranám</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mi consectetur</p>
                </div>
            </a> 
            <a href="#" alt="viðburðir">
                <div class=box>
                    <img src="images/vidburdir.png" alt="viðburðir">
                    <h3>Viðburðir</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mi consectetur</p>
                </div>
            </a>
        </div>

    </div>

    <!-- Hér eru fréttabréf á forsíðu -->   
    <div class="frettabref_wrapper">
        <h2>Fréttabréf</h2>
        <p>Skráðu þig á póstlistann okkar og fáðu fróðleiksmola og aðrar upplýsingar vikulega</p>
        <form class="sign-up">
            <input type="text" name="email" placeholder="Skrifaðu inn netfangið þitt hér?">
            <button type="submit" onclick="alert('Takk fyrir þú færð fréttir frá okkur fljótlega')">Skrá mig</button>
        </form>
    </div>
`,
teachers: `
<div class="background_image">
<h1>Kennarar</h1>
</div>
<div class="gutter"> 
<section class="container_all_teachers" id="container_all_teachers">
</section>
</div>

<button class="container_new_members">
<h1>Upplýsingar - Nýir iðkendur</h1>
</button>
}`,
class: `
<div class="background_image">
    <h1>Námskeið</h1>
</div>
<div class="gutter">  

    <section class=information>
        <div class="description_container">
            <h1>Hatha jóga</h1>
            <p>
                HATHA er ein þekktasta tegund jóga á vesturlöndunum. HA þýðir sól og THA þýðir máni. Unnið er með jógastöður (asana), öndun (pranayama) og slökun. Jafnvægi styrkist í innkirtlakerfinu, taugakerfinu, vöðvum og stoðkerfi, ónæmiskerfi og blóðrás. Grunn líkamsstöðurnar í hatha jóga eru 84 en til eru mismunandi útfærslur sem gerir Hatha jóga fjölbreytt og styrkleikastig mjög misjafnt.
                Þegar við hægjum á önduninni þá róast hugurinn og við styrkjum meðvitund um augnablikið hér og nú. Í hringrás öndunar skapast eins konar hugleiðsluástand í jógastöðunum, einbeiting og jafnvægi í líkama, tilfinningum og huga. Þannig opnar jóga glufu fyrir sálartengingu þar sem við skynjum okkur tengd og í einingu við allt.
            </p>
            <button class="confirm_hatha">SKRÁ Á NÁMSKEIÐ</button>

            <div class="class_info">
                <div class="icon">
                    <img class="time" src="images/time.svg" alt="">
                    <img class="mattress" src="images/mattress.svg" alt="#">
                    <img class="barefoot" src="images/barefoot.svg" alt="#">
                    <img class="clothing" src="images/clothing.svg" alt="#">
                </div>  

                <div class="text">
                    <h2>Tíminn er 60 - 75 mín</h2>
                    <h2>Dýrur og annað á staðnum </h2>
                    <h2>Við eru berfætt í tímanum</h2>
                    <h2>Gott að vera í þæginlegum fötum</h2>
                </div>  
            </div>
        </div>

        <div class="description_container_2">
            <div class="description_content">
                <h1>Hatha jóga</h1>
                <h3>
                    Mánudaga og Miðvikudaga kl. 17.15 - 18:15 <br>
                    Laugardaga kl. 10:00 - 11:15
                </h3>
                <div class="first_time">
                    <h2>Opin tími</h2>
                    <div class="color_open"></div>
                    <h2>Frír prufutími</h2>
                </div>
                <div class="info_line"></div>
                <h1 class="hatha_teacher">Kennarar</h1>
                <h3>Auður <span> / </span> Arna Rín <span> / </span>Þórgunnur<span> / </span>Þorgerður</h3>
            </div>
            <img src="images/mynd_stakt_namsk.png" class="jogamynd" alt="hatha_jóga">
        </div>
    </section>
</div>

<section class="price">
    <h1>Verðskrá</h1>

    <div class="price_container_left">
        <div class=price_left1>
            <h4>Einn mánuður</h4>
            <h4>Þrír mánuðir</h4>
            <h4>Haustönn</h4>
            <h4>Árskort</h4>
        </div>
        <div class=price_left2>
            <h4>13.500 kr.</h4>
            <h4>33.000 kr. <span>( 11.000 kr á mánuði )</span></h4>
            <h4>39.000 kr. <span>( 9.750 kr á mánuði )</span></h4>
            <h4>99.000 kr. <span>Eingreiðsla</span></h4>
        </div>
    </div>

    <div class="price_container_right">
        <div class=price_right1>
            <h4>10 tíma kort</h4>
            <h4>Stakur tími</h4>
            <h4>Áskrift</h4>
        </div>
        <div class=price_left2>
            <h4>17.000 kr.</h4>
            <h4>2.500 kr.</h4>
            <h4>8.500 kr. á mánuði <span> (6 mánaða binditími)</span></h4>
        </div>
    </div>
</section>
`,
all_classes: `
<div class="background_image">
<h1 class="hero_text_classes">Námskeið</h1>
</div>

<div class="gutter">
<div class="opening_closing_boxes"> 
   <div>
       <button id="all_classes_button" class="all">Allir Tímar</button>
       <button id="open_classes_button" class="opening">Opnir tímar</button>
       <button id="close_classes_button" class="close">Lokaðir tímar</button>
   </div>
   <button id="price_button" class="price_button_right">Verðskrá</button>
</div>

<section class="container_all_classes" id="container_all_classes"></section>
</div>
<button class="container_new_members">
   <h1>Upplýsingar - Nýir iðkendur</h1>
</button>
`,
}