import { createContext, useEffect, useState } from 'react';

export const TemplateContext = createContext();

const TemplateProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [templateName, setTemplateName] = useState({});

  useEffect(() => {
    console.log(templateName);
  });
  return (
    <TemplateContext.Provider
      value={{ search, setSearch, templateName, setTemplateName }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export default TemplateProvider;
