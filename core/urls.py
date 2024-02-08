from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.urls.authtoken')),
    path('auth/', include('djoser.social.urls')),
    
    path('api/category/',include('apps.category.urls')),
    path('api/product/',include('apps.product.urls')),
    path('api/cart/',include('apps.cart.urls')),
    path('api/shipping/',include('apps.shipping.urls')),
    path('api/orders/',include('apps.orders.urls')),
    path('api/payment/',include('apps.payment.urls')),
    
    path('admin/', admin.site.urls),
]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]