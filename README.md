hello world


docker run \
    --rm \
    -e SONAR_HOST_URL="http://localhost:9000" \
    -e SONAR_LOGIN="72b78f100fbde54c6613b51e1ca5db2566ef59b0" \
    -v "/Users/samdychen/OneDrive/SmartHome/sps_core_v2/ezviz_agent:/usr/src" \
    sonarsource/sonar-scanner-cli



/Users/samdychen/Downloads/sonar-scanner-4.6.1.2450-macosx/bin/sonar-scanner -Dsonar.login=72b78f100fbde54c6613b51e1ca5db2566ef59b0
- 测试click up集成
