# Romera | Ventas Postventa

MVP web para registrar ventas que intervienen en la liquidación de comisiones de postventa.

## Cómo usarlo

Abrí `index.html` en un navegador. No requiere instalación.

Accesos de demostración:

- Empleado: `empleado@romera.com` / `romera123`
- Administración: `admin@romera.com` / `romera123`

Incluye carga de sucursal, vendedor automático según la sesión, origen, placa, fecha de carga, número de orden, tipo y adjunto; para los contratos, el comprobante de pago es obligatorio. Administración puede filtrar, revisar estados y exportar CSV. Los datos se conservan solamente en el navegador utilizado.

## Para llevarlo a producción

La siguiente etapa es conectar la interfaz con una base de datos y almacenamiento de archivos, habilitar cuentas corporativas reales y publicar la aplicación en un servidor. De esta forma los registros y adjuntos serían compartidos por todo el equipo.
