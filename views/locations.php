<main>
    <section class="info">
        <div class="container">
        <?php 
            $locations = [
                "1"=>"Detroit",
                "2"=>"New York",
                "3"=>"Chicago",
                "4"=>"Washington",
                "5"=>"Indianapolis",
            ];
            $maps = [
                "1"=>'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188705.6713494692!2d-83.23928932614754!3d42.35262574105979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ca0110cb1d75%3A0x5776864e35b9c4d2!2sDetroit%2C%20MI%2C%20USA!5e0!3m2!1sen!2sua!4v1654101155091!5m2!1sen!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',

                "2"=>'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059669861!2d-74.25986773739224!3d40.697149413874705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sua!4v1654101186107!5m2!1sen!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',

                "3"=>'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380513.71601800894!2d-88.01215000586734!3d41.83339249957157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2sua!4v1654101122869!5m2!1sen!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',

                "4"=>'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198740.833189561!2d-77.15466081346223!3d38.893670812865125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2sua!4v1654101207397!5m2!1sen!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',

                "5"=>'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196237.84519909642!2d-86.27283469179362!3d39.77970029291871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN%2C%20USA!5e0!3m2!1sen!2sua!4v1654101234131!5m2!1sen!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            ];

            if(isset($_GET["location"])&&$_GET["location"]<=5){
                
                $location = $locations[$_GET["location"]];
                $map = $maps[$_GET["location"]];
                ?>
                <div class="contacts">
                    <h2 class="title">Contact us anytime</h2>
                    <div class="info_blocks">
                        <div class="info_block">
                            <div class="icon"><i class='bx bxs-info-circle'></i></div>
                            <div class="data">
                                <h3 class="data__title">Company Name</h3>
                                <p class="data__desc">TOP Masonry&Tuckpointing</p>
                            </div>
                        </div>
                        <div class="info_block">
                            <div class="icon"><i class='bx bxs-phone'></i></div>
                            <div class="data">
                                <h3 class="data__title">Phone</h3>
                                <a class="data__desc" href="tel:+17737665391">+1(773)766-5391</a>
                            </div>
                        </div>
                        <div class="info_block">
                            <div class="icon"><i class='bx bxs-envelope'></i></div>
                            <div class="data">
                                <h3 class="data__title">Email</h3>
                                <a class="data__desc" href="mailto:topmasonry4615@gmail.com">topmasonry4615@gmail.com</a>
                            </div>
                        </div>
                        <div class="info_block">
                            <div class="icon"><i class='bx bxs-map'></i></div>
                            <div class="data">
                                <h3 class="data__title">Address</h3>
                                <p class="data__desc"><?php echo $location ?></p>
                            </div>
                        </div>
                        <div class="info_block">
                            <div class="icon"><i class='bx bxs-time-five'></i></div>
                            <div class="data">
                                <h3 class="data__title">Business Hours</h3>
                                <p class="data__desc">Monday – Friday – 8am – 7pm <br> Saturday – 8am – 3pm <br> Sunday – Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="map">
                    <h2 class="title">Find us here</h2>
                    <div class="map_block">
                        <?php echo $map ?>
                    </div>
                </div>
                <?php
            } else {
                ?>
                <div class="locations">
                    <h2 class="title">Our Locations</h2>
                    <ul>
                        <?php for ($i=1; $i <= count($locations); $i++) { 
                            ?>
                             <li>
                                <a href="index.php?action=locations&location=<?php echo $i?>">
                                    <div class="icon"><i class='bx bxs-map'></i></div>
                                    <?php echo $locations[$i]?>
                                </a>
                            </li>
                            <?php
                        }?>
                    </ul>
                </div>
                <?php
            }
        ?>
        </div>
    </section>

    <script src="js/info.js"></script>
</main>