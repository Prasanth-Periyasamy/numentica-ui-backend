import type { Schema, Struct } from '@strapi/strapi';

export interface AboutusImpact extends Struct.ComponentSchema {
  collectionName: 'components_aboutus_impacts';
  info: {
    displayName: 'Impact';
    icon: 'chartBubble';
  };
  attributes: {
    impactDetails: Schema.Attribute.Component<
      'common.title-with-description',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface AboutusTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_aboutus_testimonials';
  info: {
    description: '';
    displayName: 'Testimonials';
    icon: 'car';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    profilePhoto: Schema.Attribute.Media<'images'>;
    projectName: Schema.Attribute.String;
  };
}

export interface BlogBlogs extends Struct.ComponentSchema {
  collectionName: 'components_blog_blogs';
  info: {
    displayName: 'blogs';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
  };
}

export interface CommonButton extends Struct.ComponentSchema {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    name: Schema.Attribute.String;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    slug: Schema.Attribute.String;
  };
}

export interface CommonImageWithDescription extends Struct.ComponentSchema {
  collectionName: 'components_common_image_with_descriptions';
  info: {
    displayName: 'ImageWithDescription';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CommonTitleWithDescription extends Struct.ComponentSchema {
  collectionName: 'components_common_title_with_descriptions';
  info: {
    description: '';
    displayName: 'TitleWithDescription';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface FooterFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'FooterLinks';
  };
  attributes: {
    links: Schema.Attribute.Component<'footer.links', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    link: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

export interface FooterNewsLetter extends Struct.ComponentSchema {
  collectionName: 'components_footer_news_letters';
  info: {
    displayName: 'NewsLetter';
  };
  attributes: {
    news: Schema.Attribute.Component<'common.title-with-description', false>;
    subscribe: Schema.Attribute.Component<'common.button', false>;
  };
}

export interface HomeClientFeedback extends Struct.ComponentSchema {
  collectionName: 'components_home_client_feedbacks';
  info: {
    displayName: 'clientFeedback';
  };
  attributes: {
    clientName: Schema.Attribute.String;
    clientPhoto: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    feedback: Schema.Attribute.Blocks;
  };
}

export interface HomeGetinTouch extends Struct.ComponentSchema {
  collectionName: 'components_home_getin_touches';
  info: {
    displayName: 'GetinTouch';
  };
  attributes: {
    btnName: Schema.Attribute.String;
    btnSlug: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface HomePartners extends Struct.ComponentSchema {
  collectionName: 'components_home_partners';
  info: {
    displayName: 'Partners';
  };
  attributes: {
    btnName: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    partnerPhoto: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeTeam extends Struct.ComponentSchema {
  collectionName: 'components_home_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    book: Schema.Attribute.Component<'common.button', false>;
    founders: Schema.Attribute.Component<'team.founders', true>;
    teams: Schema.Attribute.Component<'common.title-with-description', false>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface TeamFounders extends Struct.ComponentSchema {
  collectionName: 'components_team_founders';
  info: {
    description: '';
    displayName: 'founders';
  };
  attributes: {
    companyName: Schema.Attribute.String;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    profilePhoto: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'aboutus.impact': AboutusImpact;
      'aboutus.testimonials': AboutusTestimonials;
      'blog.blogs': BlogBlogs;
      'common.button': CommonButton;
      'common.image-with-description': CommonImageWithDescription;
      'common.title-with-description': CommonTitleWithDescription;
      'footer.footer-links': FooterFooterLinks;
      'footer.links': FooterLinks;
      'footer.news-letter': FooterNewsLetter;
      'home.client-feedback': HomeClientFeedback;
      'home.getin-touch': HomeGetinTouch;
      'home.partners': HomePartners;
      'home.team': HomeTeam;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'team.founders': TeamFounders;
    }
  }
}
