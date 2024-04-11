# ASP - Customer Service
- API Domain
  - go to `api-generator/`
    - duplicate `config.template.yml` and change its name to appropriate one.
    - make change of `xxx` and `yyy` in that file
  - go to `package.json`
    - add script `apigen:process:api-[domain name]`
    - make neccessary changes
    - update script `apigen:process:correction`
      - add `[domain name]` and the end of script string (using for argv)