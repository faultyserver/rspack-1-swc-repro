Repro attempt for SWC WASM plugin failure with Rspack 1.1/swc_core 5.0.1:

## Usage

```shell
pnpm i
pnpm dev
open https://localhost:8080
```

```
Message:  failed to invoke plugin: failed to invoke plugin on 'Some(...)'

Caused by:
    0: failed to invoke `/.../swc_intl_message_transformer.wasm` as js transform plugin at /.../swc_intl_message_transformer.wasm
    1: Failed to deserialize program received from host

Stack backtrace:
   0: _napi_register_module_v1
   1: _wasmer_vm_imported_memory32_atomic_notify
   2: _napi_register_module_v1
   3: _napi_register_module_v1
   4: _napi_register_module_v1
   5: _napi_register_module_v1
   6: _napi_register_module_v1
   7: _napi_register_module_v1
   8: _napi_register_module_v1
   9: _napi_register_module_v1
  10: _napi_register_module_v1
  11: _napi_register_module_v1
  12: _napi_register_module_v1
  13: _napi_register_module_v1
  14: _napi_register_module_v1
  15: _napi_register_module_v1
  16: _napi_register_module_v1
  17: _napi_register_module_v1
  18: _napi_register_module_v1
  19: _napi_register_module_v1
  20: _napi_register_module_v1
  21: _napi_register_module_v1
  22: _napi_register_module_v1
  23: __pthread_joiner_wake
```
