#### how to run it
# curl this file as raw from github then chmod777 it 
# ./start.sh 

apt-get update 
apt-get install vim # cuz i like vim 
apt-get install wget
apt-get install nano # for easier copying ability 

curl https://raw.githubusercontent.com/zdolson/Neo-Market/david_develop/backend/Contracts/new-boa/testing.py -o testing.py 
curl https://raw.githubusercontent.com/zdolson/Neo-Market/david_develop/backend/Contracts/new-boa/compile.py -o compile.py
