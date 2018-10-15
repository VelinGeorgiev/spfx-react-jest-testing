EMAIL=$1
PASS=$2

npm i -g @pnp/office365-cli
o365 version

# you have to run "o365 spo login https://contoso.sharepoint.com"
# to agree with the consent first time

o365 spo login https://velingeorgiev.sharepoint.com --authType password --userName $EMAIL --password $PASS

o365 spo app add --filePath "../SPFx sppkg/react-jest-testing.sppkg" --overwrite --verbose

#o365 spo app remove -i 35625ec7-e7bf-4f54-975a-cfa6c057015f --verbose