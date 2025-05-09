#!/bin/sh
if [ "$MODE" = "cloud" ]; then
  echo "Running in cloud mode"
  export MY_VAR="production_value"
else
  echo "Running in development mode"
  export MY_VAR="development_value"
fi

exec "$@"
