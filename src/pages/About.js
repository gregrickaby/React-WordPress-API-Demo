import React, { Component } from "react";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title="My latest blog posts" />
        <Menu />
        <section className="single-container">
          <article class="post">
            <h1 class="post-title">About</h1>
            <div class="post-content">
              <p>This is a static page. Not much to see here.</p>
              <img src="https://picsum.photos/750/300?random" alt="Random" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Profectus in exilium Tubulus statim nec respondere ausus; Qui
                potest igitur habitare in beata vita summi mali metus? Videsne
                quam sit magna dissensio? Duo Reges: constructio interrete. Aut
                haec tibi, Torquate, sunt vituperanda aut patrocinium voluptatis
                repudiandum. Qui autem esse poteris, nisi te amor ipse ceperit?
                Eadem nunc mea adversum te oratio est.{" "}
              </p>
              <p>
                Quorum sine causa fieri nihil putandum est. Negat enim summo
                bono afferre incrementum diem. Hoc unum Aristo tenuit: praeter
                vitia atque virtutes negavit rem esse ullam aut fugiendam aut
                expetendam. Roges enim Aristonem, bonane ei videantur haec:
                vacuitas doloris, divitiae, valitudo; An haec ab eo non
                dicuntur? Iam id ipsum absurdum, maximum malum neglegi. Hoc etsi
                multimodis reprehendi potest, tamen accipio, quod dant.{" "}
              </p>
              <img
                src="https://picsum.photos/200/300/?random"
                alt="Random"
                className="left"
              />
              <p>
                Et ille ridens: Video, inquit, quid agas; Alia quaedam dicent,
                credo, magna antiquorum esse peccata, quae ille veri
                investigandi cupidus nullo modo ferre potuerit. Certe, nisi
                voluptatem tanti aestimaretis. Sed emolumenta communia esse
                dicuntur, recte autem facta et peccata non habentur communia.
                Neutrum vero, inquit ille.{" "}
              </p>
              <p>
                Quam ob rem tandem, inquit, non satisfacit? Quid censes in
                Latino fore? Quodsi vultum tibi, si incessum fingeres, quo
                gravior viderere, non esses tui similis; Hi autem ponunt illi
                quidem prima naturae, sed ea seiungunt a finibus et a summa
                bonorum; Ut in geometria, prima si dederis, danda sunt omnia.
                Non igitur potestis voluptate omnia dirigentes aut tueri aut
                retinere virtutem. Nam illud quidem adduci vix possum, ut ea,
                quae senserit ille, tibi non vera videantur. Est autem etiam
                actio quaedam corporis, quae motus et status naturae congruentis
                tenet; Ea, quae dialectici nunc tradunt et docent, nonne ab
                illis instituta sunt aut inventa sunt? Ut proverbia non nulla
                veriora sint quam vestra dogmata.{" "}
              </p>
              <div className="fluid-embed">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/bvim4rsNHkQ?rel=0"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="YouTube"
                />
              </div>
            </div>
          </article>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
