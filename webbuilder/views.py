from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import WebPage
from django.contrib.auth.decorators import login_required


def index(request):
    return render(request, 'index.html')


@login_required
def list_pages(request):
    pages = WebPage.objects.filter(user=request.user)
    return render(request, 'list_pages.html', {'pages': pages})


@login_required
def create_page(request):
    if request.method == "POST":
        WebPage.objects.create(
            user=request.user,
            title=request.POST.get("title", "Untitled Page"),
            html=request.POST.get("html", ""),
            css=request.POST.get("css", "")
        )
        return JsonResponse({"message": "Page created successfully"})
    return render(request, 'editor_v2.html')


@login_required
def edit_page(request, id):
    page = get_object_or_404(WebPage, user=request.user, pk=id)
    return render(request, 'editor_v2.html', {'page': page})


@login_required
def save_page(request, id):
    page = get_object_or_404(WebPage, user=request.user, pk=id)
    if request.method == "POST":
        page.html = request.POST.get("html", "")
        page.css = request.POST.get("css", "")
        page.save()
        return JsonResponse({"message": "Page saved successfully"})
    return JsonResponse({"error": "Invalid request"}, status=400)


@login_required
def delete_page(request, id):
    """Deletes a page."""
    page = get_object_or_404(WebPage, user=request.user, pk=id)
    page.delete()
    return JsonResponse({"message": "Page deleted successfully!"})


@login_required
def preview_page(request, id):
    """Previews a page."""
    page = get_object_or_404(WebPage, user=request.user, pk=id)
    return render(request, 'preview_page.html', {'page': page})