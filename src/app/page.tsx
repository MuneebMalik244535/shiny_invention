import React from "react";
import Hero from "./components/hero";
import FirstHero from "./components/firsthero";
import Sechero from "./components/sechero";
import ThirdSec from "./components/thirdsec";
import ForthHero from "./components/forthhero";
import FifthHero from "./components/fifthhero";
import SixHero from "./components/sixhero";
import SevenHero from "./components/sevenhero";
import EightHero from "./components/eighthero";
import NineHero from "./components/ninehero";
import SearchProducts from "./components/searchbar/searchproduct";
import SanityChefData from "./components/sanitychef";
import SanityHomeData from "./components/sanityfood";

export default function Home() {
  return (
    <div>
      <Hero/>
      <SanityHomeData/>
      <SanityChefData/>
<SearchProducts/>      

<FirstHero/>
<Sechero/>
<ThirdSec/>
<ForthHero/>
<FifthHero/>
<SixHero/>
<SevenHero/>
<EightHero/>
<NineHero/>







    </div>
  );
}