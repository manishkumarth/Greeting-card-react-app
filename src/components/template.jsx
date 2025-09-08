import TemplateCard from './templatecard';

const dummyData = [
  {
    id: 'template_01',
    bgImg:
      'https://raw.githubusercontent.com/manishkumarth/images-for-greeting-card/main/template-images/anniversy01.avif',
    templateName: 'Birthday',
  },
  {
    id: 'template_02',
    bgImg:
      'https://raw.githubusercontent.com/manishkumarth/images-for-greeting-card/main/template-images/wedding01.avif',
    templateName: 'Wedding',
  },
  {
    id: 'template_03',
    bgImg:
      'https://raw.githubusercontent.com/manishkumarth/images-for-greeting-card/main/template-images/birthday01.avif',
    templateName: 'Festival',
  },
  {
    id: 'template_04',
    bgImg:
      'https://raw.githubusercontent.com/manishkumarth/images-for-greeting-card/main/template-images/birthday02.avif',
    templateName: 'Anniversary',
  },
  {
    id: 'template_05',
    bgImg:
      'https://raw.githubusercontent.com/manishkumarth/images-for-greeting-card/main/template-images/diwali01.avif',
    templateName: 'New Year',
  },
];

function Template() {
  return (
    <>
      <div className="container">
        <div className="row">
          {dummyData.map((item) => (
            <TemplateCard
              key={item.id}
              templateName={item.templateName}
              templateBgImage={item.bgImg}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Template;
