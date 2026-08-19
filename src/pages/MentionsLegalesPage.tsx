import { useEffect } from "react";

export const MentionsLegales = () => {
  useEffect(() => {
    document.title = "Mentions Légales | Kolawolé & Co.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Consultez les mentions légales de l'agence Kolawolé & Co. Éditeur, hébergeur et conditions d'utilisation du site.");
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Fond décoratif */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0"
      >
        <div className="absolute -top-20 -right-16 w-[500px] h-[500px] bg-[#93f2f233] rounded-full blur-[60px]" />
        <div className="absolute top-[400px] -left-16 w-[600px] h-[600px] bg-[#ffd9e133] rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full px-6 py-20 mt-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#008080] mb-12 tracking-tight">
          Mentions Légales
        </h1>

        <div className="space-y-8 text-[#3e4949] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1b1c1c]">1. Présentation du site</h2>
            <p>
              En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
            <p>
              <strong>Propriétaire :</strong> Kolawolé & Co.<br />
              <strong>Responsable publication :</strong> HOUETO Kolawolé Laurel – kolawoleandco20@gmail.com<br />
              <strong>Hébergeur :</strong> Vercel Inc. – 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1b1c1c]">2. Conditions générales d'utilisation</h2>
            <p>
              L'utilisation du site implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1b1c1c]">3. Description des services fournis</h2>
            <p>
              Le site a pour objet de fournir une information concernant l'ensemble des activités de la société. Kolawolé & Co. s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1b1c1c]">4. Propriété intellectuelle et contrefaçons</h2>
            <p>
              Kolawolé & Co. est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site est interdite, sauf autorisation écrite préalable de : Kolawolé & Co.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1b1c1c]">5. Limitations de responsabilité</h2>
            <p>
              Kolawolé & Co. ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1b1c1c]">6. Gestion des données personnelles et cookies</h2>
            <p>
              À l'occasion de l'utilisation du site, peuvent être recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.
            </p>
            <p>
              Kolawolé & Co. ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site (notamment via le formulaire de contact). L'utilisateur fournit ces informations en toute connaissance de cause.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
