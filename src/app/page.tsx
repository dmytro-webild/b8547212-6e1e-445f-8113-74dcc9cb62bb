"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import AboutMetric from "@/components/sections/about/AboutMetric";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Star, Users, MapPin, Clock, Utensils, MessageCircle, Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSmallSizeLargeTitles"
      background="fluid"
      cardStyle="gradient-mesh"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName=""
          navItems={[
            { name: "Дом", id: "home" },
            { name: "Мени", id: "menu" },
            { name: "О нама", id: "about" },
            { name: "Контакт", id: "contact" }
          ]}
          bottomLeftText="Нови Сад"
          bottomRightText="064 3223131"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Добродошли у МАГАЦИН"
          description="Аутентична кулинарска искуства са традиционалном кухињом и савременим прTouch-ом. Уживајте у свежој храни, пријатној атмосфери и преданој услузи. Оцењено 4,4 звезде од стране 2.618 задовољних гостију."
          tag="Ресторан у Новом Саду"
          tagIcon={Star}
          tagAnimation="blur-reveal"
          buttons={[
            { text: "Погледај Мени", href: "#menu" },
            { text: "Резервиши Сто", href: "#contact" }
          ]}
          buttonAnimation="blur-reveal"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5G70weEGyzW6m1uD1aBnEZv9u/uploaded-1773774060712-n1s4g5qf.png"
          imageAlt="МАГАЦИН restaurant interior with elegant dining atmosphere"
          showDimOverlay={true}
          showBlur={true}
          ariaLabel="Welcome to МАГАЦИН restaurant"
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="О МАГАЦИНУ"
          metrics={[
            { icon: Users, label: "Задовољних Гостију", value: "2.618" },
            { icon: Star, label: "Просечна Оцена", value: "4,4★" },
            { icon: MapPin, label: "Јединствена Локација", value: "Новосадски Сајам" },
            { icon: Clock, label: "Резервисано Време", value: "Open 24h" }
          ]}
          metricsAnimation="blur-reveal"
          useInvertedBackground={false}
          ariaLabel="МАГАЦИН restaurant metrics and achievements"
        />
      </div>

      <div id="menu" data-section="menu">
        <FeatureCardThree
          title="Разноврстан Мени"
          description="Откријте нашу пажљиво куирану селекцију јела која комбинују традиционалну балканску кухињу са модерним техникама кулинарске уметности. Свако јело је припремљено са свежим, квалитетним намирницама."
          tag="Четири Категорије"
          tagIcon={Utensils}
          tagAnimation="blur-reveal"
          features={[
            {
              id: "starter",              title: "Предјела",              description: "Телећа чорбица (450 РСД) и освеживаћа Салата Цезар (650 РСД) за савршен почетак вечери.",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-caesar-salad-oval-plate-green-white-checkered-tablecloth-bottle-fork-dark-red-background_140725-124895.jpg",              imageAlt: "Caesar salad appetizer"
            },
            {
              id: "mains",              title: "Главна Јела",              description: "Спагети карбонара (850 РСД) препоручена од стране критичара и аутентична Пица Маргарита (750 РСД).",              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-pizza-with-vegetables_23-2148574236.jpg",              imageAlt: "Margherita pizza main course"
            },
            {
              id: "drinks",              title: "Пића",              description: "Безалкохолни мојито (350 РСД) и Ледена кафа (300 РСД) за совршену допуну вашег оброка.",              imageSrc: "http://img.b2bpic.net/free-photo/blue-mojito-jar-with-lemon-mint-shiny-background-with-yellow-blue-pipes_114579-5170.jpg",              imageAlt: "Mojito and iced coffee beverages"
            },
            {
              id: "vegan",              title: "Посни Мени",              description: "Посна салата (500 РСД) и Посна супа (400 РСД) за праксне и вегетаријанске госте.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-vegetables-as-tomato-lettuce-basil-with-vegetable-salad-black-pepper-garlic-crusher-melted-oil-wooden-table_141793-10789.jpg",              imageAlt: "Fresh vegan menu ingredients"
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Вршите Наруџбину", href: "#contact" }
          ]}
          buttonAnimation="blur-reveal"
          ariaLabel="МАГАЦИН menu features and categories"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Шта Кажу Наши Гости"
          description="Прочитајте прославе од наших задовољних гостију и локалних водича који су искусили магију МАГАЦИНА."
          tag="Аутентични Отзиви"
          tagIcon={MessageCircle}
          tagAnimation="blur-reveal"
          testimonials={[
            {
              id: "1",              name: "Симо Жваља",              role: "Локални Водич",              testimonial: "Млади, пријатни и ненаметљиви конобари, леп избор пића, храна свежа и укусна. Телећа чорбица лечи, а спагети карбонара 6 језика говоре. Пристојне цене и азбучни назив локала. Препорука!",              imageSrc: "http://img.b2bpic.net/free-photo/medium-woman-taking-food-photo_23-2149250048.jpg",              imageAlt: "Симо Жваља portrait"
            },
            {
              id: "2",              name: "Veljko Manojlović",              role: "Локални Водич",              testimonial: "Занимљив локал, дизајниран од метала и металних кутија офарбаних у мат црну боју, у комбинацији са дрветом. Атмосфера је јединствена и позива на враћање.",              imageSrc: "http://img.b2bpic.net/free-photo/person-indian-origin-having-fun_23-2150285278.jpg",              imageAlt: "Veljko Manojlović portrait"
            },
            {
              id: "3",              name: "Sladjan Djokic",              role: "Локални Водич",              testimonial: "Изузетно место за дружење, храну, пиће! Цена по особи 2.000–2.500 RSD. Вредност за новац је одлична и препоручујем свеима.",              imageSrc: "http://img.b2bpic.net/free-photo/middle-age-hispanic-woman-standing-yellow-background-smiling-positive-doing-ok-sign-with-hand-fingers-successful-expression_839833-32513.jpg",              imageAlt: "Sladjan Djokic portrait"
            },
            {
              id: "4",              name: "Марко Петровић",              role: "Редовни Гост",              testimonial: "Постао сам редовни гост. Квалитет хране је конзистентан, а персонал је увек предусретљив. МАГАЦИН је постао мој омиљени избор за вечере.",              imageSrc: "http://img.b2bpic.net/free-photo/friends-restaurant-medium-shot_23-2149930137.jpg",              imageAlt: "Марко Петровић portrait"
            }
          ]}
          carouselMode="buttons"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Оставите Отзив", href: "#contact" }
          ]}
          buttonAnimation="blur-reveal"
          ariaLabel="Customer testimonials for МАГАЦИН restaurant"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Резервисање & Наруџбина"
          tagIcon={Phone}
          tagAnimation="blur-reveal"
          title="Контактирајте МАГАЦИН"
          description="Резервишите свој сто, наручите храну или сазнајте више о нашим услугама. Ми смо доступни 24 сата за ваше потребе."
          buttons={[
            { text: "Позовите Сад: 064 3223131", href: "tel:+381643223131" },
            { text: "Наручи преко Glovo", href: "https://glovoapp.com" },
            { text: "Наручи преко Eventl", href: "https://eventl.in" },
            { text: "Пости Facebook", href: "https://facebook.com" }
          ]}
          buttonAnimation="blur-reveal"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          ariaLabel="Contact МАГАЦИН restaurant"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="МАГАЦИН"
          leftLink={{
            text: "Хајдук Вељкова 11, Нови Сад",            href: "https://maps.google.com"
          }}
          rightLink={{
            text: "© 2024 МАГАЦИН. Сва права задржана.",            href: "#"
          }}
          ariaLabel="МАГАЦИН restaurant footer"
        />
      </div>
    </ThemeProvider>
  );
}