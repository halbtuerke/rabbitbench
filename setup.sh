#!/bin/sh

# set environment

. ./env.sh

# check java version

echo check java version
which java 
if [ $? = 0 ]  
then java -version
else echo please install java first; exit 1
fi

# make sure we have a fresh start in the tools dir.

rm -rf $TOOL_DIR
mkdir -p $TOOL_DIR

rm -rf $LIB_DIR
mkdir -p $LIB_DIR

# get RabbitMQ Java client

cd $TOOL_DIR
wget $CLIENT_DISTRIBUTION_URL
tar xvzof $CLIENT_DISTRIBUTION_TAR

# get Benchmark files and HTML patterns

git clone $BENCH_REPO

# copy a few files to more convenient locations

cp rabbitmq-perf-html/perf.css ../$LIB_DIR
cp rabbitmq-perf-html/perf.js ../$LIB_DIR
cp rabbitmq-perf-html/lib/*.js ../$LIB_DIR
 


